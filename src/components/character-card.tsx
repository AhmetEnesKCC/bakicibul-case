import { CharacterCardProps } from "@/types/props";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";

const CharacterCard = (props: CharacterCardProps) => {
  return (
    <Card>
      <CardHeader>{props.name}</CardHeader>
      <CardContent>
        <div className="w-full relative aspect-square">
          <Image
            fill
            src={props.image}
            alt={"rick morty image " + props.name}
          />
        </div>
        <div className="border-t mt-2">{props.origin.name}</div>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
