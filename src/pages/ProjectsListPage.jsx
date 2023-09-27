import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from '../components/Modal/Modal'

export default function ProjectsListPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const projectsList = useSelector((state) => state.projectsList);

  const openModal = (e) => {
    e.preventDefault();
    setModalVisible(true);
  };
  return (
    <section>
      <button onClick={openModal}>Create new project</button>

      {projectsList.map((item) => {
        const { title, projectId } = item;
        return (
          <ul>
            <li key={projectId}>{title}</li>
          </ul>
        );
      })}
    </section>
  );
}
