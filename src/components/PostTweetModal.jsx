import { Modal, ModalBody } from "react-bootstrap";
import PostTweet from "./PostTweet";

export default function PostTweetModal({
  showModal,
  handleDismiss,
  userDetail,
}) {
  return (
    <Modal
      data-cy="modalWindow"
      dialogClassName="postTweetModal"
      show={showModal}
      onHide={handleDismiss}
    >
      <Modal.Header closeButton>
        <button className="draft">Drafts</button>
      </Modal.Header>
      <ModalBody>
        <PostTweet userDetail={userDetail} />
      </ModalBody>
    </Modal>
  );
}
