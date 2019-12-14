import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empirestate building",
    description: "One fo the most famous",
    imageUrl:
      "https://images.unsplash.com/photo-1498335746477-0c73d7353a07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80",
    address: "20 Catherine west",
    location: {
      lat: 40.74,
      lng: -73.8451
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Empirestate building",
    description: "One fo the most famous",
    imageUrl:
      "https://images.unsplash.com/photo-1498335746477-0c73d7353a07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80",
    address: "20 Cathrine west",
    location: {
      lat: 40.74,
      lng: -73.8451
    },
    creator: "u2"
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList places={loadedPlaces} />;
};
export default UserPlaces;
