import React from 'react'
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import H6 from "@material-tailwind/react/Heading6";
import LeadText from '@material-tailwind/react/LeadText';
export const CardItem = ({image,name,species,status,gender}) => {
    return (
        <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
            <Card>
            <CardImage
                src={image}
                alt={name}
            />

            <CardBody>
                <H6 color="gray">{name}</H6>
               
                    <LeadText>Especie: {species}</LeadText>
                    <LeadText> Estatus: {status}</LeadText>
                   <LeadText> Genero: {gender}</LeadText>
                   
                    
            </CardBody>

           
        </Card>
        </div>
        
    )
}
