import { Button, Popover, TextField } from '@mui/material';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useEditTransactionMutation } from '../../services/dataApi';
import { formatDate } from '../../utilities/formatDate';
import { ContentCardTransaction } from './CardTransaction.styles';

function CardTransaction({ transaction }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [conceptEdit, setConceptEdit] = useState('');
    const editTransaction = useEditTransactionMutation();

    const isBill = (type) => {
        let className;
        if (type.toLowerCase() === 'payment') {
            className = 'c-danger';
        }
        if (type.toLowerCase() === 'topup') {
            className = 'c-default';
        }
        return className;
    };

    const handleClose = () => {
        setAnchorEl(null);

        try {
            editTransaction(transaction.id, conceptEdit);
        } catch (error) {
            Swal.fire('hubo un error', 'error');
        }
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <ContentCardTransaction>
            <div className="article">
                <h4 className="text">{transaction.concept} </h4>
                <span className="date t-light">{formatDate(transaction.date)}</span>
            </div>
            <div className="amount">
                <h4 className={`text ${isBill(transaction.type)} `}>$ {transaction.amount}</h4>
            </div>
            <Button
                aria-describedby={transaction.id}
                variant="contained"
                onClick={(e) => setAnchorEl(e.currentTarget)}>
                Edit
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={() => handleClose()}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}>
                <TextField
                    placeholder="enter new concept"
                    onChange={(e) => setConceptEdit(e.target.value)}
                />
            </Popover>
        </ContentCardTransaction>
    );
}

export default CardTransaction;
