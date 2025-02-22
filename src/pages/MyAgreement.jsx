import useAgreement from '../hooks/useAgreement';


const MyAgreement = () => {
const [agreement] = useAgreement()
console.log(agreement)

  return (
    <div>
      <h2>Length Of the Data:{agreement.length}</h2>
    </div>
  );
};

export default MyAgreement;