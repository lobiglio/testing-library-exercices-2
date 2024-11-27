const TrashButton = ({ isVisible, remove }) =>
  isVisible ? (
    <button onClick={remove}>Supprimer les tâches complétées</button>
  ) : null;

export default TrashButton;
