import { Jodit } from 'jodit'; // Importe corretamente conforme a documentação do Jodit
import { useEffect, useRef } from 'react';

interface ModeloEditorProps {
  textoInicial: string;
  onSave: (texto: string) => void;
  onClose: () => void;
}

const ModeloEditor: React.FC<ModeloEditorProps> = ({ textoInicial, onSave, onClose }) => {
  const editor = useRef(null);

  useEffect(() => {
    const jodit = new Jodit(editor.current, {
      // Configurações do Jodit conforme necessário
    });
    
    jodit.value = textoInicial;
    
    return () => jodit.destruct(); // Limpeza ao desmontar
  }, [textoInicial]);

  return (
    <div>
      <textarea ref={editor}></textarea>
      <button onClick={() => onSave(editor.current.value)}>Salvar</button>
      <button onClick={onClose}>Cancelar</button>
    </div>
  );
};

export default ModeloEditor;
