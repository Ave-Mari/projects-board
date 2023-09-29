import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProject } from "../../actions/actions";
import { projectsList } from "../../reducers/projectsListReducer";
//components
import Modal from "../../components/Modal/Modal";
import ProjectItemPage from "../ProjectItemPage/ProjectItemPage";
//style
import './ProjectsListPage.scss'

export default function ProjectsListPage() {
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");

  const projectsList = useSelector((state) => state.projectsList);

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmitForm = () => {
    const newProject = {
      projectId: new Date().valueOf(),
      title: title,
      tasks: []
    };
    dispatch(addProject(newProject));
    setTitle("");
    setModalVisible(false);
  };

  const openModal = (e) => {
    e.preventDefault();
    setModalVisible(true);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setModalVisible(false);
    }
  }

  return (
    <section>
      <button className="btn-create" onClick={openModal}>Create new project</button>

      {modalVisible && (
        <Modal
          closeModal={closeModal}
          //modalVisible={modalVisible}
          //setModalVisible={setModalVisible}
          children={
            <form onSubmit={handleSubmitForm}>
              <input
                type="text"
                value={title}
                placeholder="Project name"
                onChange={handleInputChange}
              />
              <button className="btn-create-project" type="submit">Create project</button>
            </form>
          }
        />
      )}

      {projectsList.map((item) => {
        const { title, projectId } = item;
        return (
          <ul>
            <li >
              <Link to={`/projects/${projectId}`} key={projectId}> 
                {title}  
              </Link>
            </li>
          </ul>
        );
      })}
    </section>
  );
}
