import React, { useState, useEffect } from 'react'

import { Form, Formik } from 'formik'
import { usePlayer } from './../context/PlayerProvider'
import { useParams, useNavigate } from 'react-router-dom'


function PlayerForm() {
  const { createPlayer, getPlayer, updatePlayer } = usePlayer()

  const [player, setPlayer] = useState({
    name: "",
    nationality: "",
    position: "",
    image: "",
  })

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const loadPlayer = async () => {
      if (params.id) {
        const player = await getPlayer(params.id)
        setPlayer({
          name: player.name,
          nationality: player.nationality,
          position: player.position,
          image: player.image,
        })
      }
    }
    loadPlayer()
  }, [])

  return (
    <>
      <h2 className='flex justify-center text-3xl font-bold mt-10'>{params.id ? `Edit ${player.name}` : "Create player"}</h2>
      <Formik
        initialValues={player}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updatePlayer(params.id, values)
            navigate('/')
          } else {
            await createPlayer(values)
          }

          setPlayer({
            name: "",
            nationality: "",
            position: "",
            image: "",
          })
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            className='border w-3/12 m-auto rounded-lg mt-10 p-3'
            onSubmit={handleSubmit}
          >
            <div className="form-group flex flex-col gap-2 text-lg">
              <label htmlFor="image">Image URL:</label>
              <input
                className='border'
                type="text"
                id='image'
                name='image'
                onChange={handleChange}
                value={values.image}
                autoFocus
              />
            </div>
            <div className="form-group flex flex-col gap-2 text-lg">
              <label htmlFor="name">Name:</label>
              <input
                className='border'
                type="text"
                id='name'
                name='name'
                onChange={handleChange}
                value={values.name}
              />
            </div>
            <div className="form-group flex flex-col gap-2 text-lg">
              <label htmlFor="nationality">Nationality:</label>
              <input
                className='border'
                type="text"
                id='nationality'
                name='nationality'
                onChange={handleChange}
                value={values.nationality}
              />
            </div>
            <div className="form-group flex flex-col gap-2 text-lg">
              <label htmlFor="position">Position:</label>
              <input
                className='border'
                type="text"
                id='position'
                name='position'
                onChange={handleChange}
                value={values.position}
              />
            </div>
            <div className="form-group mt-2">
              <button
                className='btn bg-blue-600 hover:scale-105 px-6 py-2 text-white block m-auto rounded-md'
                type='submit'
                disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default PlayerForm