import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/index";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newLoading, setNewLoading] = useState(true);

  const navigate = useNavigate();

  const NewLogin = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      localStorage.setItem("@TOKENCLIENT", response.data.token);
      const { token, client: clientResponse } = response.data;
      setClient(clientResponse);
      localStorage.setItem("@TOKEN", token);
      toast.success("Login realizado com sucesso!");

      api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      
      // Remove the setTimeout here
      navigate("/dashboard");
    } catch (error) {
      toast.error("Usuário não encontrado!");
    } finally {
      setLoading(false);
    }
  };

  const getClient = async () => {
    const tokenValidate = localStorage.getItem("@TOKEN");

    if (!tokenValidate) {
      setNewLoading(false);
      return;
    }
    api.defaults.headers.common["Authorization"] = `Bearer ${tokenValidate}`;
    try {
      const response = await api.get(`/clients/${tokenValidate}`);

      setClient(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao carregar informações do cliente!");
    } finally {
      setNewLoading(false);
    }
  };

  useEffect(() => {
    // Call getClient only when necessary (e.g., after login)
    getClient();
  }, []);

  const NewRegister = async (data) => {
    try {
      setLoading(true);
      await api.post("/clients", data);
      console.log(data);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/"); // Directly navigate, no need for setTimeout
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        NewLogin,
        client,
        setClient,
        newLoading,
        setNewLoading,
        NewRegister,
        getClient,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
