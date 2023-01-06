import React, { useEffect, useState } from 'react'
import data from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { Section, SectionCenter, SectionInfo } from './styles/Content.styled'

export default function Content() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = people.length - 1

    if (index < 0) {
      setIndex(lastIndex)
    }

    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)

    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <Section>
      <SectionCenter>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          let position = 'nextSlide'

          if (personIndex === index) {
            position = 'activeSlide'
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === person.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <SectionInfo key={id} className={position}>
              <img src={image} alt={name} />
              <h4>{name}</h4>
              <p>{title}</p>
              <p>{quote}</p>
              <p>
                <FaQuoteRight />
              </p>
            </SectionInfo>
          )
        })}

        <button onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </SectionCenter>
    </Section>
  )
}
