import { useParams, useNavigate, Link } from "react-router-dom"
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"

import caseStudies from "../../data/caseStudies.json"
import SEO from "../../components/SEO"

export default function CaseStudy() {

  const { id } = useParams()
  const navigate = useNavigate()

const projectIndex = caseStudies.findIndex((p) => p.id === id)
const project = caseStudies[projectIndex]

const prevProject = caseStudies[projectIndex - 1]
const nextProject = caseStudies[projectIndex + 1]

  if (!project) {
    return <div className="text-center py-20">Project not found</div>
  }

  return (

    <PhotoProvider>

    <SEO
      title={project.title}
      description={project.problem || `Case study: ${project.title}`}
      image={project.thumbnail}
    />

    <div className="max-w-6xl mx-auto py-16">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="search-pill inline-block mb-6"
      >
        ← Back
      </button>


      {/* TITLE */}

      <h1 className="text-4xl font-bold mb-10">
        {project.title}
      </h1>


      {/* PROJECT INFO */}

      <div className="grid md:grid-cols-4 gap-6 border-b pb-10 mb-14">

        <div>
          <p className="text-gray-500 text-sm">Client</p>
          <p className="font-medium">{project.client}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Category</p>
          <p className="font-medium">{project.category}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Tools</p>
          <p className="font-medium">{project.tools}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Year</p>
          <p className="font-medium">{project.year}</p>
        </div>

      </div>


      {/* PROBLEM */}

      <section className="mb-16">

        <h2 className="text-2xl font-semibold mb-4">
          The Problem
        </h2>

        <p className="text-gray-600">
          {project.problem}
        </p>

      </section>


      {/* RESEARCH */}

      <section className="mb-16">

        <h2 className="text-2xl font-semibold mb-4">
          Research & Direction
        </h2>

        <p className="text-gray-600">
          {project.research}
        </p>

      </section>


      {/* SKETCHES */}

      <section className="mb-16">

        <h2 className="text-2xl font-semibold mb-6">
          Sketching & Ideation
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {project.sketches.map((img, i) => (

            <PhotoView key={i} src={img}>
              <img src={img} className="rounded-lg cursor-zoom-in"/>
            </PhotoView>

          ))}

        </div>

      </section>


      {/* DIGITAL EXPLORATION */}

      <section className="mb-16">

        <h2 className="text-2xl font-semibold mb-6">
          Digital Exploration
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {project.exploration.map((img, i) => (

            <PhotoView key={i} src={img}>
              <img src={img} className="rounded-lg cursor-zoom-in"/>
            </PhotoView>

          ))}

        </div>

      </section>


      {/* REFINEMENT */}

      <section className="mb-16">

        <h2 className="text-2xl font-semibold mb-6">
          Refinement
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {project.refinement.map((img, i) => (

            <PhotoView key={i} src={img}>
              <img src={img} className="rounded-lg cursor-zoom-in"/>
            </PhotoView>

          ))}

        </div>

      </section>





      {/* APPLICATION */}

      <section className="mb-20">

        <h2 className="text-2xl font-semibold mb-6">
          Real World Application
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {project.application.map((img, i) => (

            <PhotoView key={i} src={img}>
              <img src={img} className="rounded-lg cursor-zoom-in"/>
            </PhotoView>

          ))}

        </div>

      </section>


                {/* FINAL RESULT BIG IMAGE */}

      {project.finalImage && (

      <section className="mb-20">

        <h2 className="text-2xl font-semibold mb-6">
          Final Result
        </h2>

        <PhotoView src={project.finalImage}>
          <img
            src={project.finalImage}
            className="rounded-x1 cursor-zoom-in"
          />
        </PhotoView>

      </section>

      )}

      {/* CLIENT REVIEW */}

      {project.review && (

      <section className="bg-gray-100 p-10 rounded-xl mb-20">

        <p className="text-lg italic mb-4">
          "{project.review}"
        </p>

        <p className="font-semibold">
          — {project.client}
        </p>

      </section>

      )}


  {/* PREVIOUS PROJECT */}

  {prevProject ? (

    <Link
      to={`/portfolio/casestudy/${prevProject.id}`}
      className="text-left group"
    >

      <p className="text-sm text-gray-500 mb-1">
        ← Previous Project
      </p>

      {/* <p className="text-lg font-semibold group-hover:underline">
        {prevProject.title}
      </p> */}

    </Link>

  ) : <div />}


     {/* NEXT PROJECT */}

  {nextProject && (

    <Link
      to={`/portfolio/casestudy/${nextProject.id}`}
      className="text-right group"
    >

      <p className="text-sm text-gray-500 mb-1">
        Next Project →
      </p>

      {/* <p className="text-lg font-semibold group-hover:underline">
        {nextProject.title}
      </p> */}

    </Link>

  )}

    </div>

    </PhotoProvider>

  )
}