import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProject } from "../actions/actions";
import { projectsList } from "../reducers/projectsListReducer";
//components
import Modal from "../components/Modal/Modal";
import ProjectItemPage from "./ProjectItemPage";

export default function ProjectsListPage() {
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");

  const projectsList = useSelector((state) => state.projectsList);
  //console.log(projectsList);

  const handleInputChange = (e) => {
    setProjectTitle(e.target.value);
  };

  const handleSubmitForm = () => {
    dispatch(addProject(projectTitle));
    setProjectTitle("");
    setModalVisible(false);
  };

  const openModal = (e) => {
    e.preventDefault();
    setModalVisible(true);
  };

  return (
    <section>
      <button onClick={openModal}>Create new project</button>

      {modalVisible && (
        <Modal
          //closeModal={setModalVisible(false)}
          //modalVisible={modalVisible}
          //setModalVisible={setModalVisible}
          children={
            <form onSubmit={handleSubmitForm}>
              <input
                type="text"
                value={projectTitle}
                placeholder="Project name"
                onChange={handleInputChange}
              />
              <button type="submit">Create project</button>
            </form>
          }
        />
      )}

      {projectsList.map((item) => {
        const { title, projectId } = item;
        return (
          <ul>
            <li key={projectId}>
              <Link to={`/projects/${projectId}`} >                             
                <ProjectItemPage projectId={projectId}>
                {title}  
                </ProjectItemPage>
              </Link>
            </li>
          </ul>
        );
      })}
    </section>
  );
}
