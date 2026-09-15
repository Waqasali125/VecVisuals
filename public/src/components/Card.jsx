export default function Card({children, className=''}) {
  return <div className={`bg-white rounded-lg shadow p-4 hover:shadow-lg transition ${className}`}>{children}</div>;
}
