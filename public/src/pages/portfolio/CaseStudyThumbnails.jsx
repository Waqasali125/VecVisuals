import { Link } from "react-router-dom"
import caseStudies from "../../data/caseStudies.json"
import SEO from "../../components/SEO"

export default function CaseStudyThumbnails() {

  return (

    <>
    <SEO
      title="Case Studies"
      description="Explore VecVisuals' case studies covering design process, research and final outcomes."
    />
    <div className="grid md:grid-cols-3 gap-6">

      {caseStudies.map((item) => (

        <Link
          key={item.id}
          to={`/portfolio/casestudy/${item.id}`}
          className="group"
        >

          <div className="overflow-hidden rounded-xl">

            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full group-hover:scale-105 transition"
            />

          </div>

          <h3 className="mt-3 text-lg font-semibold">
            {item.title}
          </h3>

        </Link>

      ))}

    </div>
    </>

  )
}