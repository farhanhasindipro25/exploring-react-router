import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <div>
      <h1>Find the details of {details.name}</h1>
      <h3>Address: {details.address.city}, {details.address.street}, {details.address.suite}, {details.address.zipcode}</h3>
      <h3>Company: {details.company.name}, {details.company.bs}</h3>
      <p>Tagline: {details.company.catchPhrase}</p>
      <h3>Phone Number: {details.phone}</h3>
      <h3>Email ID: {details.email}</h3>
      <h3>Email ID: {details.website}</h3>
    </div>
  );
};

export default UserDetails;
