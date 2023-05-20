import React from "react";
import useService from "../../hooks/useService";

import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ManageServices = () => {
  const [services, setServices] = useService();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `https://hidden-bastion-31828.herokuapp.com/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Manage your services</h2>
      {services.map((service) => (
        <div key={service._id}>
          <p>
            {service.title}
            <FontAwesomeIcon
              className="mx-2"
              onClick={() => handleDelete(service._id)}
              icon={faTrashCan}
            />
          </p>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
