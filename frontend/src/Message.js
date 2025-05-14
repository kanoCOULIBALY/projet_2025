import React, { useState, useEffect } from 'react';
import './Message.css';

function Message() {
  const [section, setSection] = useState('inbox');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isComposing, setIsComposing] = useState(false);
  const [newMessage, setNewMessage] = useState({ recipient: '', subject: '', body: '' });
  const [searchTerm, setSearchTerm] = useState(''); // Ajout de l'état pour la recherche
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('messages');
    return savedMessages ? JSON.parse(savedMessages) : [
      { id: 1, sender: 'admin', recipient: 'me', subject: 'Bienvenue', body: "Bienvenue sur SafeExchange ! Votre messagerie sécurisée est activée.", timestamp: '10:00', unread: true, folder: 'inbox' },
      { id: 2, sender: 'system', recipient: 'me', subject: 'Test', body: "Merci de tester cette plateforme.", timestamp: '10:01', unread: false, folder: 'inbox' },
      { id: 3, sender: 'me', recipient: 'admin', subject: 'Réponse', body: 'Merci pour l’accueil !', timestamp: '12:00', unread: false, folder: 'sent' },
      { id: 4, sender: 'me', recipient: 'user2', subject: 'Brouillon test', body: 'Ceci est un brouillon.', timestamp: '13:00', unread: false, folder: 'drafts' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.recipient && newMessage.subject && newMessage.body) {
      const sentMessage = {
        id: messages.length + 1,
        sender: 'me',
        recipient: newMessage.recipient,
        subject: newMessage.subject,
        body: newMessage.body,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        unread: false,
        folder: 'sent',
      };
      setMessages([...messages, sentMessage]);
      setNewMessage({ recipient: '', subject: '', body: '' });
      setIsComposing(false);
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  const handleSaveDraft = () => {
    if (newMessage.recipient || newMessage.subject || newMessage.body) {
      const draftMessage = {
        id: messages.length + 1,
        sender: 'me',
        recipient: newMessage.recipient,
        subject: newMessage.subject,
        body: newMessage.body,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        unread: false,
        folder: 'drafts',
      };
      setMessages([...messages, draftMessage]);
      setNewMessage({ recipient: '', subject: '', body: '' });
      setIsComposing(false);
    }
  };

  const filteredMessages = messages.filter((msg) => {
    if (section === 'inbox') return msg.folder === 'inbox' && msg.recipient === 'me';
    if (section === 'sent') return msg.folder === 'sent' && msg.sender === 'me';
    if (section === 'drafts') return msg.folder === 'drafts';
    return false;
  }).filter((msg) =>
    msg.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="messaging-container">
      <div className="sidebar">
        <h2>SafeExchange <span>🔒</span></h2>
        <button className="compose-btn" onClick={() => setIsComposing(true)}>
          Nouveau message
        </button>
        <ul>
          <li
            className={section === 'inbox' ? 'active' : ''}
            onClick={() => setSection('inbox')}
          >
            Boîte de réception{' '}
            <span>{messages.filter(m => m.folder === 'inbox' && m.unread).length}</span>
          </li>
          <li
            className={section === 'sent' ? 'active' : ''}
            onClick={() => setSection('sent')}
          >
            Envoyés
          </li>
          <li
            className={section === 'drafts' ? 'active' : ''}
            onClick={() => setSection('drafts')}
          >
            Brouillons
          </li>
          <li>Important</li>
          <li>Plus</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Rechercher dans les messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="message-list">
          {filteredMessages.length > 0 ? (
            filteredMessages.map((msg) => (
              <div
                key={msg.id}
                className={`message-item ${msg.unread ? 'unread' : ''}`}
                onClick={() => setSelectedMessage(msg)}
              >
                <span className="sender">{msg.sender}</span>
                <span className="subject">{msg.subject}</span>
                <span className="timestamp">{msg.timestamp}</span>
              </div>
            ))
          ) : (
            <div className="no-messages">Aucun message trouvé.</div>
          )}
        </div>
        <div className="message-view">
          {selectedMessage ? (
            <div className="message-detail">
              <h3>{selectedMessage.subject}</h3>
              <p><strong>De :</strong> {selectedMessage.sender}</p>
              <p><strong>À :</strong> {selectedMessage.recipient}</p>
              <p><strong>Date :</strong> {selectedMessage.timestamp}</p>
              <p>{selectedMessage.body}</p>
              <button
                onClick={() => {
                  setIsComposing(true);
                  setNewMessage({ recipient: selectedMessage.sender, subject: `Re: ${selectedMessage.subject}`, body: '' });
                }}
              >
                Répondre
              </button>
            </div>
          ) : (
            <div className="no-selection">
              <p>Sélectionnez un message ou rédigez-en un nouveau.</p>
            </div>
          )}
        </div>
      </div>
      {isComposing && (
        <div className="modal-overlay">
          <div className="compose-modal">
            <div className="modal-header">
              <h3>Nouveau message</h3>
              <button className="close-btn" onClick={() => setIsComposing(false)}>×</button>
            </div>
            <form onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="À"
                value={newMessage.recipient}
                onChange={(e) => setNewMessage({ ...newMessage, recipient: e.target.value })}
              />
              <input
                type="text"
                placeholder="Objet"
                value={newMessage.subject}
                onChange={(e) => setNewMessage({ ...newMessage, subject: e.target.value })}
              />
              <textarea
                placeholder="Message"
                value={newMessage.body}
                onChange={(e) => setNewMessage({ ...newMessage, body: e.target.value })}
              />
              <div className="compose-actions">
                <button type="submit">Envoyer</button>
                <button type="button" onClick={handleSaveDraft}>Enregistrer comme brouillon</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;