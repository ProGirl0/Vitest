/**
 * @vitest-environment jsdom
 */

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

const SimpleComponent = () => <div>Olá Mundo</div>

describe('Teste simples', () => {
  it('deve renderizar', () => {
    render(<SimpleComponent />)
    

    const elemento = screen.getByText('Olá Mundo')
    

    expect(elemento).toBeDefined()
    expect(elemento).not.toBeNull()
    expect(elemento.textContent).toBe('Olá Mundo')
    expect(elemento.tagName).toBe('DIV')
    expect(elemento.parentNode).not.toBeNull()
  })
})