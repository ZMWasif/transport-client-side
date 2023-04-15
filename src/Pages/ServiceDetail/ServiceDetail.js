import React from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../Home/UseServiceDetail/useServiceDetail";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);

  return (
    <div>
      <h2>Welcome to the details of: {service.title}</h2>
      <div className="text-center">
        <Link to={`/services/${serviceId}`}>
          <button className="btn btn-primary">Proceed Further</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
