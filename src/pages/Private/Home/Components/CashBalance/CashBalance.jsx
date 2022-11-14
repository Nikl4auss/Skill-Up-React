// hooks
import { Link } from 'react-router-dom';
// utils
import { PRIVATE } from '../../../../../router/PathUrl';
import { ContentCashBalance } from './CashBalanace.styles';
import { useGetAccountQuery } from '../../../../../services/dataApi';

function CashBalance() {
    const { data, isSuccess } = useGetAccountQuery();
    let money;

    if (isSuccess) {
        money = data[0].money;
    }

    return (
        <ContentCashBalance>
            <div className="textos d-flex between f-14 fw-4 t-white">
                <span className="t-white">Saldo Actual</span>
                <Link to={`${PRIVATE.root}/${PRIVATE.topUp}`}>+ Cargar saldo</Link>
            </div>
            <span className="saldo f-28 fw-7 t-white">$ {money} </span>
        </ContentCashBalance>
    );
}

export default CashBalance;
