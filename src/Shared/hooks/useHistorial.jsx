import toast from "react-hot-toast";
import { getHistorial } from "../../services/api"
import { useState } from "react";


export const useHistorial = () => {

    const [ userH, setUserH ] = useState([])

    const getHistorialUser = async(id) => {
        try {
            const response = await fetch(`http://localhost:2658/user/historial/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/pdf',
                },
            });
    
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `historial_${id}.pdf`);
    
                // Append to html link element page
                document.body.appendChild(link);
    
                // Start download
                link.click();
    
                // Clean up and remove the link
                link.parentNode.removeChild(link);
            } else {
                console.error('Failed to download file');
            }
        } catch (error) {
            console.error('Error during the request', error);
        }
    }


  return {
    getHistorialUser,
    userH
  }
}
