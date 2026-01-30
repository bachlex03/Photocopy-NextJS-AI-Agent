"use client";

import { AlertCircle, RefreshCw } from "lucide-react";
import * as React from "react";
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "~/components/ui";

interface Props {
	children: React.ReactNode;
	fallback?: React.ReactNode;
	onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
	hasError: boolean;
	error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error("ErrorBoundary caught an error:", error, errorInfo);
		this.props.onError?.(error, errorInfo);
	}

	handleReset = () => {
		this.setState({ hasError: false, error: null });
	};

	render() {
		if (this.state.hasError) {
			if (this.props.fallback) {
				return this.props.fallback;
			}

			return (
				<div className="min-h-[400px] flex items-center justify-center p-4">
					<Card className="max-w-md w-full">
						<CardHeader className="text-center">
							<div className="mx-auto w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
								<AlertCircle className="w-8 h-8 text-destructive" />
							</div>
							<CardTitle className="text-xl">Something went wrong</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<p className="text-sm text-muted-foreground text-center">
								We apologize for the inconvenience. Please try refreshing the
								page or contact support if the problem persists.
							</p>
							{this.state.error && (
								<details className="text-xs text-muted-foreground bg-muted p-3 rounded-md">
									<summary className="cursor-pointer font-medium">
										Error details
									</summary>
									<pre className="mt-2 overflow-auto whitespace-pre-wrap">
										{this.state.error.message}
									</pre>
								</details>
							)}
							<Button
								onClick={this.handleReset}
								className="w-full"
								variant="default"
							>
								<RefreshCw className="w-4 h-4 mr-2" />
								Try again
							</Button>
						</CardContent>
					</Card>
				</div>
			);
		}

		return this.props.children;
	}
}

// Hook for functional components to handle errors
export function useErrorHandler() {
	const [error, setError] = React.useState<Error | null>(null);

	React.useEffect(() => {
		if (error) {
			throw error;
		}
	}, [error]);

	return setError;
}
