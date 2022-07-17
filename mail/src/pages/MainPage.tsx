import FolderCreateModal from "../components/modals/folderModal/folderCreateModal/folderCreateModal";
import FolderEditModal from "../components/modals/folderModal/folderEditModal/folderEditModal";
import Navbar from "../components/navbar/Navbar";
import Table from "../components/table/Table";

const MainPage = () => {
  return (
    <div className='wrapper'>
      <Navbar /> <Table />
      <FolderEditModal />
      <FolderCreateModal />
    </div>
  );
};

export default MainPage;
