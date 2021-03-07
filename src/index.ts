import { Company } from './Company';
import { User } from './User';

import { CustomMap } from './customMap';

const user = new User();
const customMap = new CustomMap('map');

customMap.addUserMaker(user);
