import React, { useEffect, useRef, useState } from "react";

// ⚠️ PLACEHOLDER CLIENT ID — replace with your real PayPal Client ID
// (from https://developer.paypal.com/dashboard/applications) before going live.
// "test" only works in PayPal's sandbox and will not process real payments.
const PAYPAL_CLIENT_ID = "test";
const PAYPAL_CURRENCY = "USD";

let sdkPromise = null;

function loadPayPalSdk() {
  if (window.paypal) return Promise.resolve(window.paypal);
  if (sdkPromise) return sdkPromise;

  sdkPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=${PAYPAL_CURRENCY}`;
    script.async = true;
    script.onload = () => resolve(window.paypal);
    script.onerror = () => reject(new Error("Failed to load PayPal SDK"));
    document.body.appendChild(script);
  });

  return sdkPromise;
}

export default function PayPalButton({ itemName, price }) {
  const containerRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!price) return;
    let cancelled = false;

    loadPayPalSdk()
      .then((paypal) => {
        if (cancelled || !containerRef.current) return;
        containerRef.current.innerHTML = "";

        paypal
          .Buttons({
            style: { layout: "horizontal", tagline: false, height: 40 },
            createOrder: (data, actions) =>
              actions.order.create({
                purchase_units: [
                  {
                    description: itemName,
                    amount: { value: Number(price).toFixed(2) },
                  },
                ],
              }),
            onApprove: (data, actions) =>
              actions.order.capture().then((details) => {
                alert(`Thank you! Payment completed for "${itemName}".`);
              }),
            onError: () => setError(true),
          })
          .render(containerRef.current);
      })
      .catch(() => setError(true));

    return () => {
      cancelled = true;
    };
  }, [itemName, price]);

  if (!price) return null;

  return (
    <div className="mt-6">
      <div ref={containerRef} />
      {error && (
        <p className="text-sm text-red-500 mt-2">
          PayPal checkout couldn't load. Please try again later.
        </p>
      )}
    </div>
  );
}
