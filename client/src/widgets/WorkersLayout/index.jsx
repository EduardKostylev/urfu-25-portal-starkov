import WorkersTable from '../../features/WorkersTable';
import WorkersFilter from '../../features/WorkersFilter/ui';
import './WorkersLayout.scss';

export default function WorkersLayout() {
    return (
        <div className='workers-layout'>
            <div className='workers-layout__filters'>
                <WorkersFilter />
            </div>
            <div className='workers-layout__table'>
                <WorkersTable />
            </div>
        </div>
    )
}
