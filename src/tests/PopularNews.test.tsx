import { render, waitFor, screen } from "@testing-library/react";
import PopularNews from "../components/LandingPage/PopularNews";

import ApiService from "../helper/httpfetcher";
import "@testing-library/jest-dom";

jest.mock("../helper/httpfetcher");

describe("PopularNews Component", () => {
  test("renders skeleton cards while loading", async () => {
    render(<PopularNews />);
    const skeletonCards = await screen.findAllByTestId("news-card-skeleton");
    expect(skeletonCards).toHaveLength(6); // Assuming 6 skeleton cards for loading
  });

  test("renders no data message when there are no news items", async () => {
    const mockData = {
      data: {
        results: [],
      },
    };
    (ApiService.fetchData as jest.Mock).mockResolvedValueOnce(mockData);

    render(<PopularNews />);
    await waitFor(() => {
      const noDataMessage = screen.getByText("No Data Found");
      expect(noDataMessage).toBeInTheDocument();
    });
  });
});
