
import { useEffect, useState } from "react";
import "./IngredientModal.css";

function Modal(props) {
  // accept either prop name: isOpen or isModalOpen
  const { isOpen: propIsOpen, isModalOpen: propIsModalOpen,
      imageUrl, description,name,qtyneeded,handleRemove,handleAdd} = props;

  // local visible state — syncs with incoming prop when provided, otherwise works uncontrolled
  const [visible, setVisible] = useState(Boolean(propIsOpen ?? propIsModalOpen));

  // keep local visible in sync when parent updates the prop
  useEffect(() => {
    if (typeof propIsOpen !== "undefined") setVisible(Boolean(propIsOpen));
    else if (typeof propIsModalOpen !== "undefined") setVisible(Boolean(propIsModalOpen));
    // if neither prop is provided, component is uncontrolled and uses its local state
  }, [propIsOpen, propIsModalOpen]);

  // Close handler: prefer calling parent's onClose if provided; otherwise update local state
  const handleClose = () => {
      setVisible(false);
  };

  // Close on Escape key when visible
  useEffect(() => {
    if (!visible) return;
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, ); // note: handleClose stable in this scope

  if (!visible) return null;

  return (
    <div
      className="modal-overlay"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {imageUrl && (
          <div className="modal-image-container">
            <img className="modal-image" src={imageUrl} alt="Dish" />
          </div>
        )}
        <div className="modal-heading-container">
            <h2 className="modal-heading">{name}</h2>
            {qtyneeded > 0 ? <button className="remove-btn-modal" onClick={handleRemove}>Remove</button> : 
            <button className="add-btn-modal" onClick={handleAdd}>Add</button> }       
        </div>
        {description && <p className="modal-description">{description}</p>}

      </div>
    </div>
  );
}

export default Modal;
