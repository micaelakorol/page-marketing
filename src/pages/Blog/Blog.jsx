import React from 'react'
import {TituloPrincipal} from '../../styled-components/Servicios'
import {ReactComponent as ImgSitio} from '../../assets/blog.svg'
import { ContenedorBlog } from '../styled-components/Blog'
const Blog = () => {
  return (
    <ContenedorBlog>
    <TituloPrincipal>Aún faltan algunos ladrillos..</TituloPrincipal>
    <ImgSitio />
    </ContenedorBlog>
  )
}

export default Blog