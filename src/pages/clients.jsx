// filepath: /Users/mohammedbenharrats/moncrmnvfront/src/pages/clients.jsx
import React, { useState, useEffect } from "react";
import "../App.css";
import "./clitens.css";
import { getClients, addClient } from '../api';

function Clients() {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientsData = await getClients();
        setClients(clientsData);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, []);

  const handleAddClient = async () => {
    // Logic to add a new client
    const newClient = { /* données du nouveau client */ };
    try {
      const addedClient = await addClient(newClient);
      setClients([...clients, addedClient]);
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };

  const handleEditClient = (client) => {
    // Logic to edit a client
  };

  const handleDeleteClient = (clientId) => {
    // Logic to delete a client
  };

  const handleSelectClient = (client) => {
    setSelectedClient(client);
  };

  return (
    <div className="ClientsPage">
      <div className="ClientsHeader">
        <h1>Clients</h1>
        <button onClick={handleAddClient}>Ajouter un client</button>
      </div>
      <div className="ClientsSearch">
        <input type="text" placeholder="Rechercher un client" />
        <select>
          <option value="all">Tous</option>
          <option value="active">Actifs</option>
          <option value="inactive">Inactifs</option>
        </select>
      </div>
      <table className="ClientsTable">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Abonnements</th>
            <th>Réservations</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id} onClick={() => handleSelectClient(client)}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>{client.subscriptions.length}</td>
              <td>{client.reservations.length}</td>
              <td>
                <button onClick={() => handleEditClient(client)}>Modifier</button>
                <button onClick={() => handleDeleteClient(client.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedClient && (
        <div className="ClientDetails">
          <h2>Détails du client</h2>
          <p>Nom: {selectedClient.name}</p>
          <p>Email: {selectedClient.email}</p>
          <p>Téléphone: {selectedClient.phone}</p>
          <h3>Abonnements</h3>
          <ul>
            {selectedClient.subscriptions.map((subscription) => (
              <li key={subscription.id}>{subscription.name}</li>
            ))}
          </ul>
          <h3>Réservations</h3>
          <ul>
            {selectedClient.reservations.map((reservation) => (
              <li key={reservation.id}>{reservation.date}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Clients;