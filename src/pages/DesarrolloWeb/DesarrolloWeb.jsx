import React from "react";
import { Subtitulo } from "../styled-components/Planes";
import { ReactComponent as Check } from "../../assets/check2.svg";
import {
  ArticuloDesarrollo,
  ContenidoDesarrollo,
  ParrafoDW,
} from "../styled-components/DesarrolloWeb";
import { ImgMarketing } from "../../styled-components/Contenido";
import {
  DescripcionRedes,
  ItemArticulo,
} from "../styled-components/GestionRedes";
import dataDesarrollo from "./Data/DataDesarrollo";
import { ReactComponent as Web } from "../../assets/web.svg";
import TiposDeSitios from "./TiposDeSitios";
import PlanDesarrollo from "./PlanDesarrollo";

const PlanesDesarrolloWeb = () => {
  let beneficiosDesarrollo = dataDesarrollo.items;

  return (
    <>
      <Subtitulo>¿Por qué es tan importante contar con un sitio web?</Subtitulo>
      <ArticuloDesarrollo>
        <ContenidoDesarrollo as='section'>
          <ParrafoDW>Hoy en día, tener presencia en internet es fundamental para cualquier
          emprendimiento o empresa. Pero, ¿Cuáles son los beneficios?</ParrafoDW>
          
          <DescripcionRedes as="ul">
            {beneficiosDesarrollo.map((item) => (
              <ItemArticulo>
                {" "}
                <Check /> {item.descripcion}
              </ItemArticulo>
            ))}
          </DescripcionRedes>
        </ContenidoDesarrollo>
        <ImgMarketing>
          <Web alt="ilustracion sitio web" className="ilustracion-mkt" />
        </ImgMarketing>
      </ArticuloDesarrollo>
      <TiposDeSitios />
      <PlanDesarrollo />
    </>
  );
};

export default PlanesDesarrolloWeb;
