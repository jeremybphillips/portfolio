import { useEffect, useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import styles from "./LightboxThumbnailButton.module.css";

const LightboxThumbnail = ({ slides, isOpen, onClose = () => {} }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <div className={styles["thumbnail-button-container"]}>
      <button
        className={styles["thumbnail-button"]}
        onClick={() => setOpen(true)}
      >
        <img src={slides[0].src} width="100%" alt="" />
      </button>

      <Lightbox
        plugins={[Captions]}
        open={open}
        close={handleClose}
        carousel={{
          finite: true,
        }}
        slides={slides}
      />
    </div>
  );
};

export default LightboxThumbnail;
