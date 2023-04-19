import React from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../Home/UseServiceDetail/useServiceDetail";
import { Button, Card } from "react-bootstrap";
import AddService from "../Home/AddService/AddService";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);

  return (
    <div className="flex justify-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={service.img} />
        <Card.Body>
          <Card.Title className="justify-center fw-bold">
            {service.title}
          </Card.Title>
          <Card.Text>{service.description}</Card.Text>
          <Link to={`/services/${serviceId}`}>
            <button className="btn btn-outline btn-primary text-white">
              Proceed Further
            </button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetail;
