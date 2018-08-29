/// <reference path="node_modules/@privatescope/viewmodels/CurrencyViewModel.ts" />

namespace test.data {
    export class CurrencyRepository extends Repository<CurrencyViewModel> implements IRepository<CurrencyViewModel> {}
}
