// --------- 액션 타입
export const FETCH_PLANS_SUCCESS = 'FETCH_PLANS_SUCCESS';
export const FETCH_PLANS_FAILURE = 'FETCH_PLANS_FAILURE';
export const CREATE_PLAN_SUCCESS = 'CREATE_PLAN_SUCCESS';
export const CREATE_PLAN_FAILURE = 'CREATE_PLAN_FAILURE';
export const UPDATE_PLAN_SUCCESS = 'UPDATE_PLAN_SUCCESS';
export const UPDATE_PLAN_FAILURE = 'UPDATE_PLAN_FAILURE';
export const DELETE_PLAN_SUCCESS = 'DELETE_PLAN_SUCCESS';
export const DELETE_PLAN_FAILURE = 'DELETE_PLAN_FAILURE';
export const FETCH_PLAN_DETAIL_SUCCESS = 'FETCH_PLAN_DETAIL_SUCCESS';
export const FETCH_PLAN_DETAIL_FAILURE = 'FETCH_PLAN_DETAIL_FAILURE';

// --------- 액션 함수
export const fetchPlansSuccess = plans => ({
  type: FETCH_PLANS_SUCCESS,
  payload: plans,
});

export const fetchPlansFailure = errorMessage => ({
  type: FETCH_PLANS_FAILURE,
  payload: errorMessage,
});

export const createPlanSuccess = plan => ({
  type: CREATE_PLAN_SUCCESS,
  payload: plan,
});

export const createPlanFailure = errorMessage => ({
  type: CREATE_PLAN_FAILURE,
  payload: errorMessage,
});

export const updatePlanSuccess = plan => ({
  type: UPDATE_PLAN_SUCCESS,
  payload: plan,
});

export const updatePlanFailure = errorMessage => ({
  type: UPDATE_PLAN_FAILURE,
  payload: errorMessage,
});

export const deletePlanSuccess = planId => ({
  type: DELETE_PLAN_SUCCESS,
  payload: planId,
});

export const deletePlanFailure = errorMessage => ({
  type: DELETE_PLAN_FAILURE,
  payload: errorMessage,
});

export const fetchPlanDetailSuccess = plan => ({
  type: FETCH_PLAN_DETAIL_SUCCESS,
  payload: plan,
});

export const fetchPlanDetailFailure = errorMessage => ({
  type: FETCH_PLAN_DETAIL_FAILURE,
  payload: errorMessage,
});

// --------- 초기 상태
const initialState = {
  plans: [], // 전체 플랜 리스트
  currentPlan: null, // 특정 플랜 상세 정보
  error: null, // 오류 메시지
};

// --------- reducer
const planReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANS_SUCCESS:
      return {
        ...state,
        plans: action.payload, // 전체 플랜 리스트 업데이트
        error: null,
      };

    case FETCH_PLANS_FAILURE:
    case CREATE_PLAN_FAILURE:
    case UPDATE_PLAN_FAILURE:
    case DELETE_PLAN_FAILURE:
    case FETCH_PLAN_DETAIL_FAILURE:
      return {
        ...state,
        error: action.payload, // 오류 메시지 업데이트
      };

    case CREATE_PLAN_SUCCESS:
      return {
        ...state,
        plans: [...state.plans, action.payload], // 플랜 리스트에 추가
        currentPlan: action.payload, // 생성된 플랜을 currentPlan으로 설정
        error: null,
      };

    case UPDATE_PLAN_SUCCESS:
      return {
        ...state,
        plans: state.plans.map(plan =>
          plan.id === action.payload.id ? { ...plan, ...action.payload } : plan
        ), // 특정 플랜 업데이트
        currentPlan:
          state.currentPlan?.id === action.payload.id
            ? { ...state.currentPlan, ...action.payload }
            : state.currentPlan, // 현재 선택된 플랜도 업데이트
        error: null,
      };

    case DELETE_PLAN_SUCCESS:
      return {
        ...state,
        plans: state.plans.filter(plan => plan.id !== action.payload), // 특정 플랜 삭제
        currentPlan: state.currentPlan?.id === action.payload ? null : state.currentPlan, // 삭제된 플랜이 현재 선택된 플랜이라면 초기화
        error: null,
      };

    case FETCH_PLAN_DETAIL_SUCCESS:
      return {
        ...state,
        currentPlan: action.payload, // 특정 플랜 상세 정보 업데이트
        error: null,
      };

    default:
      return state;
  }
};

export default planReducer;
