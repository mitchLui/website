import { useEffect } from 'react';
import { setPageProperties } from '../../meta/meta';
// import { useParams } from 'react-router';
// import { companies } from '../../data/companies';

export const CompanyPage = () => {
  // const { companyId } = useParams();
  // const company = companies[companyId as string];

  useEffect(() => {
    setPageProperties({
      title: 'Mitch Lui | Full Stack Developer',
      description: 'mitchlui.dev'
    });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '2rem' }}>
      <h2>Coming Soon...</h2>
    </div>
  );
};
