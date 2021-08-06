import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Main
        title="React Avançado"
        description="TypeScript, ReactJS, NextJS e Styled Components"
      />
    )

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors corretly', () => {
    const { container } = render(
      <Main
        title="React Avançado"
        description="TypeScript, ReactJS, NextJS e Styled Components"
      />
    )

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
