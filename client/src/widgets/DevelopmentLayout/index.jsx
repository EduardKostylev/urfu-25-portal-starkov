import TrainingList from '../../features/TrainingList/ui';
import InformationList from '../../features/InformationList/ui';
import './DevelopmentLayout.scss';
import DocumentList from '../../features/DocumentList/ui';

export default function DevelopmentLayout() {
    return (
        <div className='dev-layout'>
            <div className='dev-layout__information'>
                <InformationList />
            </div>

            <div className='dev-layout__training'>
                <TrainingList />
            </div>

            <div className='dev-layout__document'>
                <DocumentList />
            </div>

        </div>

    )
}
