import React, { useState, useContext } from 'react'


const AppContext = React.createContext();

const AppProvider = ({children}) => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // const openSidebar = () => {
  //   setIsSidebarOpen(true);
  // }
  // const closeSidebar = () => {
  //   setIsSidebarOpen(false);
  // }

  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }
  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  }
  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  }

  const openEditModal = () => {
    setIsEditModalOpen(true);
  }
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  }


  return <AppContext.Provider value={{isModalOpen, openModal, closeModal, isCreateModalOpen, openCreateModal, closeCreateModal, isEditModalOpen, openEditModal, closeEditModal}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext, AppProvider}