import { useState, useEffect } from 'react';

import api from '../../../../services/apis';

import styles from './modalIngredientes.module.css';

export default function ModalProdutos({ ingrediente, onClose, titulo }) {
    const [formData, setFormData] = useState({
        ing_nome: '',
        ing_custo_adicional: '',
    });
    const [selectedFile, setSelectedFile] = useState(null);

    // Se houver um ingrediente (Edição), preenche os campos ao abrir
    useEffect(() => {
        if (ingrediente) {
            setFormData({
                ing_nome: ingrediente.nome || '',
                ing_custo_adicional: ingrediente.custo_adicional || '',
            });
        }
    }, [ingrediente]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async () => {
        // Criamos o FormData para enviar arquivos e textos juntos
        const data = new FormData();
        data.append('nome', formData.ing_nome);
        data.append('custoComoAdicional', formData.ing_custo_adicional);

        if (selectedFile) {
            data.append('imagem', selectedFile); // O nome 'imagem' deve bater com o upload.single('imagem') no backend
        }

        try {
            if (ingrediente) {
                // EDIÇÃO (PATCH)
                data.append('id', ingrediente.id);
                const response = await api.patch('/ingredientes', data);
                if (response.data.sucesso) {
                    alert('Ingrediente atualizado!');
                    onClose(true); // Fecha e avisa para atualizar a lista
                }
            } else {
                // CADASTRO (POST)
                const response = await api.post('/ingredientes', data);
                if (response.data.sucesso) {
                    alert('Ingrediente cadastrado!');
                    onClose(true); // Fecha e avisa para atualizar a lista
                }
            }
        } catch (error) {
            const msg = error.response?.data?.mensagem || 'Erro no servidor';
            alert('Erro: ' + msg);
        }
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h2>{titulo}</h2>
                <label>
                    Nome:
                    <input
                        type="text"
                        name="ing_nome"
                        value={formData.ing_nome}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Custo do adicional:
                    <input
                        type="number"
                        name="ing_custo_adicional"
                        value={formData.ing_custo_adicional}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Imagem:
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                </label>

                <div className={styles.modalActions}>
                    <button className={styles.saveButton} onClick={handleSubmit}>Salvar</button>
                    <button className={styles.closeButton} onClick={() => onClose(false)}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}
