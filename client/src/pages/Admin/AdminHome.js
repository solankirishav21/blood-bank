import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          Introducing our cutting-edge Blood Bank Inventory Management System – a revolutionary solution developed by Venture Labs that empowers healthcare organizations to efficiently manage and optimize their vital blood resources. Our comprehensive system, built using the latest Next.js framework, is designed to streamline the complex process of tracking and distributing blood units, ensuring prompt availability during critical moments. 
          </p>
          
          <p>
          With a seamless user interface and real-time updates, our Blood Bank Inventory Management System transcends traditional inventory management practices. Venture Labs' expertise in healthcare solutions shines through as we harness the power of Next.js to create a responsive, server-rendered React application that guarantees fast loading times, SEO-friendly design, and exceptional user experiences. Our project not only showcases Venture Labs' proficiency in technological innovation but also underscores our commitment to addressing crucial healthcare challenges. The Blood Bank Inventory Management System has already proven its impact by aiding startup recognition and enabling project acquisitions across diverse industries. Experience the future of blood resource management with Venture Labs – where technology meets life-saving solutions.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
