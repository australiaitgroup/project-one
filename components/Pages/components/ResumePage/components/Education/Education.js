import Timeline from "../Timeline/Timeline";

const Education = () => (
  <div>
    <h3 className="resumeSub__title">Education</h3>
    <Timeline 
      items={[{
        key: 'KEY',
        title: 'TITLE',
        year: '2020',
        company: 'Apple Inc',
        description: 'DESCRIPTION'
      }, {
        key: 'KEY',
        title: 'TITLE',
        year: '2020',
        company: 'Apple Inc',
        description: 'DESCRIPTION'
      }, {
        key: 'KEY',
        title: 'TITLE',
        year: '2020',
        company: 'Apple Inc',
        description: 'DESCRIPTION'
      }]}
    />
  </div>
);

export default Education;
