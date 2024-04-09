import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const TicketForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [contactInfo, setContactInfo] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/tickets', {
        title,
        description,
        contactInfo,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const GetcurrentTicket =  async() =>{
    try{
      const response = await axios.get('/api/tickets');
      console.log(response.data);
    }catch(error){
      console.error(error);
    }
  }


  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleContactInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContactInfo(e.target.value);
  };

  GetcurrentTicket().then((data) => {
    console.log(data);
  })

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
      <textarea placeholder="Description" value={description} onChange={handleDescriptionChange} />
      <input
        type="text"
        placeholder="Contact Info"
        value={contactInfo}
        onChange={handleContactInfoChange}
      />
      <button type="submit">Submit Ticket</button>
    </form>
  );
};

export default TicketForm;
