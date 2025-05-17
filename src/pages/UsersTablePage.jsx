import UsersTableLayer from "../components/UsersTableLayer";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";

const UsersTablePage = () => {
  return (
    <>
      <MasterLayout>
        <Breadcrumb title="Users Table" />

        {/* UsersTableLayer */}
        <UsersTableLayer />
      </MasterLayout>
    </>
  );
};

export default UsersTablePage;
