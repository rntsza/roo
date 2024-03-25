"use client";

import React, { useState, useEffect } from "react";
import JoditEditorComponent from "@/components/text-editor/page";
import { getUserInitialModels, getUsers, getInitialModel, getClientFromInitial } from "./actions";
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";
import { auth } from "@/services/auth";
import { InitialModel, User } from "@prisma/client";

const ModelosPage = () => {
  const [modelos, setModelos] = useState([]);
  const [selectedModelo, setSelectedModelo] = useState(null);
  const [selectedUser, setSelectedUser] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    const fetchModelos = async () => {
      const response = await getUserInitialModels();
      console.log(response)
      setModelos(response);
    };

    const fetchUsers = async () => {
      const response = await getUsers();
      setUsers(response);
    };

    const fetchClients = async () => {
        const response = await getClientFromInitial();
        console.log('asdasdasd', response)
        setSelectedUser(response);
    }

    fetchClients();
    fetchModelos();
    fetchUsers();
  }, []);

  const replacePlaceholders = (modelText: string, user: User) => {
    let newText = modelText.replace(/{{nomeCompleto}}/g, user.nomeCompleto);
    newText = newText.replace(/{{rg}}/g, user.rg || '');
    newText = newText.replace(/{{cpf}}/g, user.cpf || '');
    newText = newText.replace(/{{nacionalidade}}/g, user.nacionalidade || '');
    newText = newText.replace(/{{oficao}}/g, user.oficao || '');
    newText = newText.replace(/{{logradouro}}/g, user.logradouro || '');
    newText = newText.replace(/{{cep}}/g, user.cep || '');
    newText = newText.replace(/{{email}}/g, user.email || '');

    return newText;
  };


  const handleModeloSelect = async (model) => {
    const response = await getInitialModel(model)
    setSelectedModelo(response.modelText);
  };

  const handleUserSelect = async (userId: string) => {
    const user = users.find((user: User) => user.id === userId);
    if (user && selectedModelo) {
      const updatedModelText = replacePlaceholders(selectedModelo, user);
      setSelectedModelo(updatedModelText);
    }
  };
  const handleSelectedUser = async (selectedUser) => {
    const response = await getClientFromInitial(selectedUser)
    console.log('asdasd')
    setSelectedUser(response);
  };
  
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Modelos Iniciais</DashboardPageHeaderTitle>
        <DashboardPageHeaderNav>Teste</DashboardPageHeaderNav>
      </DashboardPageHeader>
      <DashboardPageMain>
        <div>
          <h1>Modelos Iniciais</h1>
          <select onChange={(e) => handleModeloSelect(e.target.value)}>
          <option value="" selected disabled hidden>Escolha um modelo</option>
            {modelos.map((modelo: InitialModel) => (
              <option key={modelo.id} value={modelo.id}>
                {modelo.title}
              </option>
            ))}
          </select>
          <select onChange={(e) => handleUserSelect(e.target.value)}>
          <option value="" selected disabled hidden>Selecione o cliente</option>
            {users.map((user: User) => (
              <option key={user.id } value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <select onChange={(e) => handleSelectedUser(e.target.value)}>
          <option value="" selected disabled hidden>Selecione o cliente</option>
            {selectedUser.map((selectedUser) => (
              <option key={selectedUser.id } value={selectedUser.id}>
                {selectedUser.nomeCompleto}
              </option>
            ))}
          </select>
          <JoditEditorComponent content={selectedModelo || ''}
          />
        </div>
      </DashboardPageMain>
    </DashboardPage>
  );
};

export default ModelosPage;

