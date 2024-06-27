import { Modal, ModalBody } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function EditProfileModal({
  isOpen,
  handleCloseModal,
  userDetail,
  setUserDetail,
}) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: userDetail.username,
      description: userDetail.description,
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setUserDetail({
      ...userDetail,
      username: data.username,
      description: data.description,
    });
  };

  return (
    <Modal
      dialogClassName="custom-editProfileModal"
      show={isOpen}
      onHide={handleCloseModal}
    >
      <Modal.Header closeButton>
        <h2>Edit Profile</h2>
        <button className="editProfile-save" onClick={handleSubmit(onSubmit)}>
          Save
        </button>
      </Modal.Header>
      <ModalBody>
        <form className="editProfileModal-form">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            name="username"
            {...register("username", { required: true })}
          />
          <label htmlFor="description">Bio</label>
          <input
            type="text"
            name="description"
            {...register("description", { required: true })}
          />
        </form>
      </ModalBody>
    </Modal>
  );
}
