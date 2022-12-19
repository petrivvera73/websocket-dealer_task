export interface DealerSignal {
    error:  boolean;
    data:   Data;
    reason: null;
}

export interface Data {
    ready_state: ReadyState;
    balances:    DataBalances;
    positions:   DataPositions;
}

export interface DataBalances {
    maker: BalancesMaker;
    taker: BalancesTaker;
}

export interface BalancesMaker {
    name:       string;
    _timestamp: number;
    balances:   { [key: string]: number };
    ccy:        string;
}

export interface BalancesTaker {
    name:       string;
    _timestamp: number;
    ccy:        string;
    balances:   TakerBalances;
}

export interface TakerBalances {
    margin:   {[key: string]: {
        total: number;
        free: number;
        reserved: number;
    }};
    exchange: {[key: string]: {
        total: number;
        free: number;
        reserved: number;
    }};
}

export interface DataPositions {
    maker: PositionsMaker;
    taker: PositionsTaker;
}

export interface PositionsMaker {
    name:        string;
    netExposure: number;
    _timestamp:  number;
    indexPrice:  number;
    orderData:   OrderData;
}

export interface OrderData {
    id:          number;
    orders:      Orders;
    netExposure: number;
    session:     Session;
}

export interface Orders {
    "110270": The110270;
}

export interface The110270 {
    _id:                 string;
    _timestamp:          number;
    _quantity:           number;
    _price:              number;
    _side:               number;
    _status:             number;
    _product_type:       string;
    _trade_pnl:          number;
    _reference_exposure: string;
    _session_id:         number;
    _rollover_type:      number;
    _fee:                number;
    _is_taker:           boolean;
    indexPrice:          number;
    sessionIM:           number;
}

export interface Session {
    open:  Open;
    close: null;
}

export interface Open {
    product_type:        string;
    cut_off_at:          Date;
    last_cut_off_price:  number;
    session_id:          number;
    previous_session_id: string;
}

export interface PositionsTaker {
    name:        string;
    netExposure: number;
    _timestamp:  number;
    product:     string;
    positions:   TakerPositions;
}

export interface TakerPositions {
    "tTESTBTCF0:TESTUSDTF0": TTESTBTCF0TESTUSDTF0;
}

export interface TTESTBTCF0TESTUSDTF0 {
    "157895580": The157895580;
}

export interface The157895580 {
    position: Position;
}

export interface Position {
    symbol:                 string;
    status:                 string;
    amount:                 number;
    base_price:             number;
    margin_funding:         number;
    margin_funding_type:    number;
    profit_loss:            number;
    profit_loss_percentage: number;
    liquidation_price:      number;
    leverage:               number;
    id:                     number;
    mts_create:             null;
    mts_update:             null;
    type:                   number;
    collateral:             number;
    collateral_min:         number;
    meta:                   Meta;
}

export interface Meta {
    reason:        string;
    order_id:      number;
    order_id_oppo: number;
    liq_stage:     null;
    trade_price:   string;
    trade_amount:  string;
    order_cid:     number;
    order_gid:     null;
}

export interface ReadyState {
    dealer: boolean;
    hedger: boolean;
    maker:  boolean;
    taker:  boolean;
}
