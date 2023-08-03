import { createContext, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { api } from "../services/index";
import { useNavigate } from "react-router-dom";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const { client, getClient } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsEditOpen, setIsEditOpen] = useState(false);
  const [modalIsContactsOpen, setIsContactsOpen] = useState(false);
  const [selectContact, setSelectContact] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalIsEditClientOpen, setIsEditClientOpen] = useState(false);
  const [selectClient, setSelectClient] = useState(null);
  const [modalIsDeleteClientOpen, setIsDeleteClientOpen] = useState(false);
  const [selectDeleteClient, setSelectDeleteClient] = useState(null);

  const navigate = useNavigate();

  const handleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  const handleEditModal = () => {
    setIsEditOpen(!modalIsEditOpen);
  };

  const handleContactsModal = () => {
    setIsContactsOpen(!modalIsContactsOpen);
  };

  const handleEditClientModal = () => {
    setIsEditClientOpen(!modalIsEditClientOpen);
  };

  const handleDeleteClientModal = (client) => {
    setSelectDeleteClient(client);
    setIsDeleteClientOpen(!modalIsDeleteClientOpen);
  };

  const RegisterContact = async (data) => {
    try {
      setLoading(true);

      await api.post("/contacts", data);

      getClient();

      setIsOpen(false);

      toast.success("Contato Cadastrado com sucesso!");
    } catch (error) {
      toast.error("Algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  const removeContact = async (id) => {
    try {
      setLoading(true);

      await api.delete(`/contacts/${id}`);
      getClient();

      toast.info("Contato removido com sucesso!");
    } catch (error) {
      toast.error("Algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  const editContact = async (data) => {
    try {
      setLoading(true);

      await api.patch(`/contacts/${data.id}`, data);
      getClient();

      setIsEditOpen(false);
      toast.success("Contato alterado com sucesso!");
    } catch (error) {
      toast.error("Algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  const editClient = async (data) => {
    try {
      setLoading(true);

      await api.patch(`/clients/${data.id}`, data);
      getClient();

      setIsEditClientOpen(false);
      toast.success("Perfil alterado com sucesso!");
    } catch (error) {
      toast.error("Algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  const deleteToken = () => {
    localStorage.removeItem("@TOKENCLIENT");
    localStorage.removeItem("@TOKEN");
  };

  const loginRedirect = () => {
    navigate("/");
  };

  const removeClient = async (id) => {
    try {
      setLoading(true);

      await api.delete(`/clients/${id}`);
      getClient();

      toast.info("Perfil removido com sucesso!");
      deleteToken();
      loginRedirect();
    } catch (error) {
      toast.error("Algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        client,
        modalIsOpen,
        setIsOpen,
        modalIsEditOpen,
        setIsEditOpen,
        selectContact,
        setSelectContact,
        loading,
        setLoading,
        RegisterContact,
        handleModal,
        handleEditModal,
        removeContact,
        editContact,
        handleContactsModal,
        modalIsContactsOpen,
        setIsContactsOpen,
        modalIsEditClientOpen,
        setIsEditClientOpen,
        selectClient,
        setSelectClient,
        editClient,
        handleEditClientModal,
        handleDeleteClientModal,
        modalIsDeleteClientOpen,
        setIsDeleteClientOpen,
        removeClient,
        loginRedirect,
        deleteToken,
        selectDeleteClient,
        setSelectDeleteClient,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
