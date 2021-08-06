import { Meta, Story } from '@storybook/react'
import { MainProps } from './interfaces'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    title: {
      name: 'Title',
      type: { name: 'string', required: true },
      defaultValue: 'React Avançado',
      description: 'Titulo da capa',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'React Avançado' }
      },
      control: {
        type: 'text'
      }
    },
    description: {
      name: 'Description',
      type: { name: 'string', required: true },
      defaultValue: 'TypeScript, ReactJS, NextJS e Styled Components',
      description: 'Subtitulo da capa',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: 'TypeScript, ReactJS, NextJS e Styled Components'
        }
      },
      control: {
        type: 'text'
      }
    }
  }
} as Meta

export const Basic: Story<MainProps> = (args) => <Main {...args} />
