import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';

import './styles.css';

type Props = {
    saleId: number;
}

export function NotificationButton({ saleId }: Props) {

    async function handleClick(id: number) {
        await axios.get(`${BASE_URL}/sales/${id}/notification`)
            .then(
                response => {
                    console.log(`Mensagem id: ${id} enviada com sucesso`);
                    toast.info(`SMS enviado com sucesso`);
                }
            )
    }

    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )

}