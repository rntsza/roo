"use client";
import React, { useState, useEffect } from "react";
import JoditEditorComponent from "@/components/text-editor/page";
import {
  getUserInitialModels,
  getUsers,
  getInitialModel,
  getClientFromInitial,
} from "./actions";
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";
// import { InitialModel, User } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Modelo {
  id: string;
  title: string;
  modelText: string | null;
  modelJson: string | null;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface User {
  id: string;
  nomeCompleto: string;
  logradouro: string;
  cep: string;
  email: string;
  
}

const ModelosPage = () => {
  const [modelos, setModelos] = useState<Modelo[]>([]);
  const [originalModeloText, setOriginalModeloText] = useState("");
  const [selectedModelo, setSelectedModelo] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserDetails, setSelectedUserDetails] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const modelosResponse = await getUserInitialModels();
      setModelos(modelosResponse);
      const usersResponse = await getUsers();
      setUsers(usersResponse);
      const clientResponse = await getClientFromInitial();
      setSelectedUserDetails(clientResponse);
    };

    fetchData();
  }, []);

  const replacePlaceholders = (modelText: any, user: any) => {
    const placeholders = [
      "nomeCompleto",
      "nacionalidade",
      "oficao",
      "email",
      "cep",
      "telefone",
      "empresa",
      "cpf",
      "rg",
      "logradouro",
      "cidade",
      "estado",
      "pais",
    ];
    return placeholders.reduce((newText, placeholder) => {
      const regex = new RegExp(`{{${placeholder}}}`, "g");
      return newText.replace(regex, user[placeholder] || `{{${placeholder}}}`);
    }, modelText);
  };

  const handleModeloSelect = async (modelId: any) => {
    const model = await getInitialModel(modelId);
    setOriginalModeloText(model.modelText || '');
    if (selectedUserDetails) {
      const updatedModelText = replacePlaceholders(
        model.modelText,
        selectedUserDetails
      );
      setSelectedModelo(updatedModelText);
    } else {
      setSelectedModelo(model.modelText);
    }
  };

  const handleUserDetails = async (userId: string) => {
    const userDetails = selectedUserDetails.find((user) => user.id === userId);
    if (userDetails) {
      const updatedModelText = replacePlaceholders(
        originalModeloText,
        userDetails
      );
      setSelectedModelo(updatedModelText);
    }
  };

  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Modelos Iniciais</DashboardPageHeaderTitle>
        <DashboardPageHeaderNav>Teste</DashboardPageHeaderNav>
      </DashboardPageHeader>
      <DashboardPageMain>
        <div className="flex flex-col items-center" >
          {/* <h1>Modelos Iniciais</h1> */}
          <div className="flex flex-row justify-evenly p-4 gap-6">
            <Select onValueChange={(value) => handleModeloSelect(value)}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Selecione um modelo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Modelos</SelectLabel>
                  {modelos.map((modelo) => (
                    <SelectItem key={modelo.id} value={modelo.id}>
                      {modelo.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => handleUserDetails(value)}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Selecione um cliente" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Clientes</SelectLabel>
                  {selectedUserDetails.map((user) => (
                    <SelectItem key={user.id} value={user.id}>
                      {user.nomeCompleto}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <JoditEditorComponent content={selectedModelo || ""} />
        </div>
      </DashboardPageMain>
    </DashboardPage>
  );
};

export default ModelosPage;
